import { useParams } from "react-router-dom";

const productList = [
    {
        id: 0,
        title: "Celbridge House",
        price: "€15",
        image: "/img/_MG_9418.jpg",
        description: "A beautiful photo of Celbridge House."
    },
    {
        id: 1,
        title: "Yellow Rose",
        price: "€20",
        image: "/img/roses.jpg",
        description: "A stunning yellow rose."
    },
    {
        id: 2,
        title: "Dublin Docklands",
        price: "€20",
        image: "/img/dublin.jpg",
        description: "A scenic view of Dublin Docklands."
    },
    {
        id: 3,
        title: "Landscape Photography",
        price: "€200",
        image: "/img/elementor-placeholder-image.webp",
        description: "A breathtaking landscape photograph."
    }
];

const ItemDescription = () => {
    const { id } = useParams();
    
    const product = productList.find(item => item.id === parseInt(id));

    if (!product) {
        return <div>Item not found</div>;
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ItemDescription;