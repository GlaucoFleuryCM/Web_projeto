const ListaGerenciamento = ({ itens, onDelete, search }) => {
    const filtrados = itens.filter(item =>
        item.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <ul className="vizualização">
            {filtrados.map((item, i) => (
                <li key={i}>
                    <span>{item}</span>
                    <button
                        className="delete-btn"
                        type="button"
                        onClick={() => onDelete(i)}
                    >
                        &times;
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default ListaGerenciamento;