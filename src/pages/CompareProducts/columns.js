export const columns = [
  {
    title: "Title",
    dataIndex: "title",
    showSorterTooltip: {
      target: "full-header",
    },
  },
  {
    title: "Image",
    dataIndex: "thumbnail",
    render: (src) => <img src={src} alt="Product" width="75px" />,
  },
//   {
//     title: "Description",
//     dataIndex: "description",
//   },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Discount percentage",
    dataIndex: "discountPercentage",
    sorter: (a, b) => a.discountPercentage - b.discountPercentage,
  },
  {
    title: "Brand",
    dataIndex: "brand",
  },
  {
    title: "Category",
    dataIndex: "category",
  },
];
