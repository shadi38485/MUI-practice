import axios from "axios";

const categoryService = {
  getAllCategories: async () => {
    try {
      const res = await axios.get(
        `https://8360a879-7c37-4ae4-9176-db6fb4566627.mock.pstmn.io/categories`
      );
      return res.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  getCategory: async (id?: string) => {
    try {
      const res = await axios.get(
        `https://8360a879-7c37-4ae4-9176-db6fb4566627.mock.pstmn.io/categories/${id}`
      );
      return res.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
};

export default categoryService;
