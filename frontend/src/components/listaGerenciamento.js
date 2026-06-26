import { FaRegEye } from "react-icons/fa";


const ListaGerenciamento = ({ itens, onDelete, onView, search, labelField = null }) => {

    const getLabel = (item) => (labelField ? item[labelField] : item) || '';

    const filtrados = itens.filter((item) =>
        getLabel(item).toLowerCase().includes(search.toLowerCase())
    );

    return (
        <ul className="vizualizacao">
            {filtrados.map((item, i) => (
                <li key={item._id || i}>
                    <span>{getLabel(item)}</span>
                    
                    <div className="btns">
                        <button
                            className="view-btn"
                            type="button"
                            onClick={() => onView(item)}
                        >
                            <FaRegEye />
                        </button>

                        <button
                            className="delete-btn"
                            type="button"
                            onClick={() => onDelete(item._id)}
                        >
                            &times;
                        </button>
                    </div>

                </li>
            ))}
        </ul>
    );
};

export default ListaGerenciamento;
