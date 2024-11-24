import React, { useEffect, useState } from 'react';
import api from '../../api/api.js';
import cachacaEscuro from "../../assets/cachacaEscuro.jpg";
import vodkaEscuro from "../../assets/vodkaEscuro.jpg";
import bitterEscuro from "../../assets/bitterEscuro.jpg";
import canelinhaEscuro from "../../assets/canelinhaEscuro.jpg";
import bananaEscuro from "../../assets/bananaEscuro.jpg";
import limaozinhoEscuro from "../../assets/limaozinhoEscuro.jpg";
import Navbar from "../../components/navBar.jsx";
import Footer from "../../components/footer.jsx";
import printCarrinho from "../../assets/printCarrinho.jpg";
import Item, { EmptyCart } from './item.jsx';
import Summary from './summary.jsx';
import Discount from './discount.jsx';
import { CartContainer, CartContent, MostWantedSection, ProductCard, CartImageContainer, CartImage } from './styles';


const Cart = () => {

  // Lógica

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cupomObj, setCupomObj] = useState(null);
  const [idCupomCartUser, setidCupomCartUser] = useState('');
  const idUser = 3;               // Aqui vai o idUser



  //
  // Carrega o carrinho
  //
  useEffect(() => {
    try {
      async function loadItems() {
        const response = await api.get(`/api/cart/${idUser}`);
        if (response.data.message === 'EmptyCart') {
          return;
        }
        setidCupomCartUser(response.data[0].id_cupom_desc);
        setCart(response.data); // Aqui eu alimento meu vetor de itens do carrinho com a resposta da requisição                     

      }
      loadItems();
    } catch (error) {
      console.error('Erro ao carregar carrinho:', error);
    }
  }, [idUser])


  useEffect(() => {

    if (!idCupomCartUser) {
      return
    }

    try {
      async function loadCupom() {
        const response = await api.get('/api/cupom/', {
          params: { idCupom: idCupomCartUser },
        });
        setCupomObj(response.data);
      }
      loadCupom();
    } catch (error) {
      console.error('Erro ao carregar cupom:', error);
    }
  }, [idCupomCartUser])


  useEffect(() => {
    const calculateTotal = () => {
      const newTotal = cart.reduce((acc, item) => {
        return acc + (item.preco * item.qtde); // Preço * quantidade
      }, 0);
      setTotal(newTotal);
    };

    calculateTotal(); // Atualiza o total toda vez que o carrinho mudar    
  }, [cart]);

  //
  // Remove item do carrinho
  //
  function removeItem(IdProduct) { // remove no banco (requisição DELETE)    
    async function deleteProduct() {
      try {
        await api.delete(`/api/cart/${IdProduct}`, {
          params: { IdUser: idUser },
        });
      } catch (error) {
        console.error('Erro ao remover item do carrinho:', error);
      }
    }
    deleteProduct();  // chama a função de deletar no banco

    const newCart = cart.filter((item) => item.id_produto !== IdProduct); // remove o produto (visualmente para o user) 
    setCart(newCart);
  }

  //
  // Altera quantidade item carrinho
  //
  function updateItem(action, IdProduct) {
    async function updateProduct() {
      try {
        await api.put(`/api/cart/${IdProduct}`, {
          IdUser: idUser,
          action: action
        });

      } catch (error) {
        console.error('Erro ao alterar quantidade do item do carrinho:', error);
      }
    }
    updateProduct();

    //Força atualização do Array para atualizar o Summary
    const updatedCart = cart.map((item) =>
      item.id_produto === IdProduct
        ? {
          ...item,
          qtde: action === 'increase' ? item.qtde + 1 : item.qtde - 1, // Aumenta ou diminui a quantidade
        }
        : item
    );

    setCart(updatedCart);

  }

    

  //
  // Altera quantidade item carrinho
  //
  function converToOrder() {
    // cart.map(item => )
    async function insertPedido() {

      //Cria Pedido
      try {
        const responsePed = await api.post('/api/order/', {
          IdUser: idUser,
          IdTransportadora: cart[0].id_transportadora,
          IdCupomDesc: cart[0].id_cupom_desc,
          IdEtapaPedido: 1,     // Aguardando pagamento
          IdFormaPagamento: 1,  //Passando fixo por enquanto
        });

        if (responsePed.data.message != 'OK') {
          throw new Error("Erro interno ao gerar pedido, por favor, tente novamente mais tarde");
        }

        const id_pedido = responsePed.data.idPedido;

        //Cria Item Pedido
        for (const item of cart) {
          const responseItemPed = await api.post(`/api/order/${id_pedido}`, {
            qtde: item.qtde,
            IdProduto: item.id_produto,
          });

          if (responseItemPed.data.message != 'OK') {
            throw new Error("Erro interno ao gerar pedido, por favor, tente novamente mais tarde");
          }
        }

        //Limpa Carrinho        
        const responseCartDelete = await api.delete('/api/cart/', {
          headers: {
            'IdUser': idUser,
          },
        });
        if (responseCartDelete.data.message != 'OK') {
          throw new Error("Erro interno ao gerar pedido, por favor, tente novamente mais tarde");
        }
      } catch (error) {
        console.error('Erro ao interno ao gerar pedido, por favor, tente novamente mais tarde', error);
        alert("Erro ao interno ao gerar pedido, por favor, tente novamente mais tarde");
      }
    }
    insertPedido();
  }


  // Fim da lógica

  return (
    <div>
      <Navbar />
      <CartContainer>
        <CartImageContainer>
          <CartImage src={printCarrinho} alt="Carrinho" />
        </CartImageContainer>

        <CartContent>
          <div className="cart">
            <div className='items'>
              {cart.map(item => <Item key={item.id_produto} idProd={item.id_produto} qtdeProd={item.qtde} removeItem={removeItem} updateItem={updateItem} />)}
              {cart.length === 0 && <EmptyCart />}
            </div>
            <Discount onCupomApply={(objCupom) => setCupomObj(objCupom)} idUser={idUser} lenghtCart={cart.length} />
          </div>
          <Summary total={total} cupom={cupomObj} converToOrder={converToOrder} lenghtCart={cart.length} />
        </CartContent>
        {/* Produtos mais procurados */}
        <MostWantedSection>
          <h2>Mais procurados</h2>
          <div className="product-grid">
            <ProductCard>
              <img src={vodkaEscuro} alt="Vodka" />
              <div className="info">
                <h3>VODKA 900ml</h3>
                <p>R$ 15,00</p>
              </div>
            </ProductCard>
            <ProductCard>
              <img src={cachacaEscuro} alt="Cachaça" />
              <div className="info">
                <h3>CACHAÇA 900ml</h3>
                <p>R$ 15,00</p>
              </div>
            </ProductCard>
            <ProductCard>
              <img src={canelinhaEscuro} alt="Canelinha" />
              <div className="info">
                <h3>CANELINHA 900ml</h3>
                <p>R$ 15,00</p>
              </div>
            </ProductCard>
            <ProductCard>
              <img src={bananaEscuro} alt="Banana" />
              <div className="info">
                <h3>BANANA 900ml</h3>
                <p>R$ 15,00</p>
              </div>
            </ProductCard>
            <ProductCard>
              <img src={limaozinhoEscuro} alt="Limãozinho" />
              <div className="info">
                <h3>LIMÃOZINHO 900ml</h3>
                <p>R$ 15,00</p>
              </div>
            </ProductCard>
            <ProductCard>
              <img src={bitterEscuro} alt="Bitter" />
              <div className="info">
                <h3>BITTER 900ml</h3>
                <p>R$ 15,00</p>
              </div>
            </ProductCard>
          </div>
        </MostWantedSection>
      </CartContainer>
      <Footer />
    </div>
  );
};

export default Cart;
