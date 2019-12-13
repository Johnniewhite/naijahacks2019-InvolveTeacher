

const filtering = (content, { title }) => {
     return content.filter((item) => item.toLowerCase().includes(title.toLowerCase()))
};

export default filtering