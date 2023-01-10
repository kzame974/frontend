const recipe = () => {
    return (
        <>
            <div>
                <h2>Liste de recettes à faire</h2>
                <ul className="list">
                    <li>
                        <span className="tags">vegan</span> Flan de carottes aux fruits
                        rouges
                    </li>
                    <li>
                        <span className="tags">dessert</span> Gateau aux poireaux
                    </li>
                    <li>
                        <span className="tags">heathy</span> Poulet et œuf
                    </li>
                </ul>
            </div>
            <hr />
            <div>
                <h2>Liste de course</h2>
                <ul className="list">
                    <li>
                        <input type="checkbox" />
                        <span className="unit">4</span> carottes
                    </li>
                    <li>
                        <input type="checkbox" />
                        <span className="unit">1</span> fruits rouges
                    </li>
                    <li>
                        <input type="checkbox" />
                        <span className="unit">2</span> poireaux
                    </li>
                    <li>
                        <input type="checkbox" />
                        <span className="unit">1kg</span> poulet
                    </li>
                    <li>
                        <input type="checkbox" />
                        <span>
            <span className="unit">6</span> œufs
            </span>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default recipe;