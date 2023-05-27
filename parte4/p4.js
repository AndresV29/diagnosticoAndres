// Datos de prueba
var inventory = [
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 20 },
    { id: 3, name: 'Producto 3', price: 30 }
  ];
  
  // Variables para almacenar los productos seleccionados y el carrito de compras
  var selectedProduct = null;
  var cart = [];
  
  // Función para mostrar el inventario
  function showInventory() {
    var inventoryElement = document.getElementById('inventory');
    inventoryElement.innerHTML = '';
  
    for (var i = 0; i < inventory.length; i++) {
      var product = inventory[i];
      var productElement = document.createElement('div');
      productElement.textContent = product.name + ' - $' + product.price;
      productElement.setAttribute('data-id', product.id);
      productElement.addEventListener('click', selectProduct);
      inventoryElement.appendChild(productElement);
    }
  }
  
  // Función para mostrar los productos en la tienda
  function showStore() {
    var storeElement = document.getElementById('store');
    storeElement.innerHTML = '';
  
    for (var i = 0; i < inventory.length; i++) {
      var product = inventory[i];
      var productElement = document.createElement('div');
      productElement.textContent = product.name + ' - $' + product.price;
      storeElement.appendChild(productElement);
    }
  }
  
  // Función para agregar un producto al carrito de compras
  function addToCart() {
    if (selectedProduct) {
      cart.push(selectedProduct);
      selectedProduct = null;
      showCart();
      showStore();
    }
  }
  
  // Función para eliminar un producto del carrito de compras
  function removeFromCart() {
    if (selectedProduct) {
      var index = cart.indexOf(selectedProduct);
      if (index !== -1) {
        cart.splice(index, 1);
        selectedProduct = null;
        showCart();
        showStore();
      }
    }
  }
  
  // Función para finalizar la compra
  function checkout() {
    if (cart.length > 0) {
      // Realizar lógica de finalización de compra
      console.log('Compra finalizada');
      cart = [];
      showCart();
      showStore();
    }
  }
  
  // Función para seleccionar un producto del inventario o carrito de compras
  function selectProduct(event) {
    var productId = parseInt(event.target.getAttribute('data-id'));
  
    // Buscar el producto en el inventario
    var product = inventory.find(function(p) {
      return p.id === productId;
    });
  
    if (!product) {
      // Buscar el producto
      product = cart.find(function(p) {
        return p.id === productId;
      });
    }
  
    selectedProduct = product;
    showCart();
    showStore();
  }
  
  // Función para mostrar el carrito de compras
  function showCart() {
    var cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';
  
    for (var i = 0; i < cart.length; i++) {
      var product = cart[i];
      var productElement = document.createElement('div');
      productElement.textContent = product.name + ' - $' + product.price;
      productElement.setAttribute('data-id', product.id);
      productElement.addEventListener('click', selectProduct);
      cartElement.appendChild(productElement);
    }
  }
  
  // Mostrar el inventario, carrito de compras y productos en la tienda al cargar la página
  showInventory();
  showCart();
  showStore();