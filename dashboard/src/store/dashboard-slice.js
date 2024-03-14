import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: {
    orders: {
      list: null,
      today: null,
      merged: null,
    },
  },
  products: {
    list: null,
    top: null,
  },
  sales: {
    today: null,
    total: null,
  },
};

const findProduct = (products, order) => {
  const product = products?.find(
    (product) => (product.id === order.product_id) === order.product._ref
  ) || {
    name: "Carregando...",
    price: 0,
  };
  return product;
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    populateOrders: (state, { payload }) => {
      const today = new Date().toLocaleDateString();
      const todayOrders =
        payload?.filter(
          (order) => new Date(order.date).toLocaleDateString === today
        ) || [];

      state.orders.list = payload;
      state.orders.today = todayOrders;
    },

    populateProducts: (state, { payload }) => {
      const products = payload ? [...payload] : [];
      const topProducts =
        products?.sort((a, b) => b.orders - a.orders).slice(0, 3) || [];

      state.products.list = payload;
      state.products.list = topProducts;
    },

    createOrdersWithProduct: (state) => {
      const { list: products } = state.products;
      const { list: orders } = state.orders;

      const ordersWithProducts =
        orders?.map((order) => {
          const product = findProduct(products, order);
          return {
            ...order,
            date: new Date(order.date),
            product: product.name,
            amount: product.price * order.amout,
          };
        }) || [];

      state.orders.merged = ordersWithProducts;
    },
    populateSales: (state) => {
      const { today: todayOrders } = state.orders;
      const { list: products } = state.products;

      // get today orders
      const todaySales =
        todayOrders
          ?.map(
            (order) => order.findProduct(products, order).price * order.quantity
          )
          .reduce((acc, curr) => acc + curr, 0) || 0;

      // get total sales

      const totalsales =
        products
          ?.map((product) => product.orders * product.price)
          .reduce((acc, curr) => acc + curr, 0) || 0;

      state.sales.today = todaySales;
      state.sales.total = totalsales;
    },
  },
});

export const {
  createOrdersWithProduct,
  populateOrders,
  populateProducts,
  populateSales,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
