import styles from './Comanda.module.css';

function Comanda({ pedidos }) {
    // Lógica do valor total ficará aqui
    const valorTotal = pedidos.reduce((acc, item) => {
        return acc + item.precoUnitario * item.quantidade;
    }, 0);

    return (
        <>
            <div className={styles.recibo}>
                /* O conteúdo visual da comanda entrará aqui */
                <div className={styles.cabecalho}>
                    <h2>🧾 Resumo do Pedido</h2>
                </div>
                <ul className={styles.lista}>
                    // lista será renderizada
                    {pedidos.map((item) => {
                        const subtotalItem = item.precoUnitario * item.quantidade;

                        return (
                            <li Key={item.id} className={styles.itemLista}>
                                <div className={styles.nomeQuantidade}>
                                    <span>{item.quantidade}</span>
                                    <span>{item.nome}</span>
                                </div>
                                <span>R$ {subtotalItem.toFixed(2)}</span>
                            </li>
                        );
                    })}
                </ul>
                <hr className={styles.linhaDivisoria}></hr>
                <div className={styles.totalDiv}>
                    <span>Total a Pagar:</span>
                    <span className={styles.valorTotal}>R${valorTotal.toFixed(2)}</span>
                </div>
            </div>
        </>
    );
}

export default Comanda;
