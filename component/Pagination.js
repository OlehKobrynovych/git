// кнопка завантажити ще
const handlePageCount = useMemo(() => {
    return (num) => {
        if (num !== 0) {
            return num % 4 === 0 ? num / 4 : Math.ceil(num / 4);
        }
    };
}, [productsCount]);

{
    handlePageCount(productsCount) > page + 1 &&
    <div className="product-view__products-pagination" onClick={() => setPage(page + 1)}>
            {/* <button className="product-view__cards-btn" >Показати більше</button> */}
            <button className="main-btn-2" >Показати більше</button>
    </div>
}