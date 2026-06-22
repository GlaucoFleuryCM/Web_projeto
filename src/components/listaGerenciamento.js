const ListaGerenciamento = ({ itens, onDelete, search, labelField = null }) => {
    const getLabel = (item) => (labelField ? item[labelField] : item) || '';

    const filtrados = itens.filter((item) =>
        getLabel(item).toLowerCase().includes(search.toLowerCase())
    );

    return (
        <ul className="vizualização">
            {filtrados.map((item, i) => (
                <li key={item._id || i}>
                    <span>{getLabel(item)}</span>
                    <button
                        className="delete-btn"
                        type="button"
                        onClick={() => onDelete(item._id || i)}
                    >
                        &times;
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default ListaGerenciamento;
