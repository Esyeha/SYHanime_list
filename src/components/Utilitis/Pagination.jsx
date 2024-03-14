const Pagination = ({ page, lastPage, setPage }) => {


    // untuk saat pindah page halaman auto pindah ke atas
    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }

    const handlePrevPage = () => {
            setPage((prevState) => prevState - 1)
            scrollTop()
    }
    return (
        <div className="bg-color-accent">
            <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-dark text-xl">
                { page <= 1 ? null :
                    <button onClick={handlePrevPage} className="transition-all hover:text-color-primary underline">Prev</button>
                }

                    <p className="gap-2">{ page } 0f {lastPage}</p>

                { page >= lastPage ? null :
                    <button onClick={handleNextPage} className="transition-all hover:text-color-primary underline">Next</button> 
                }
            </div>
        </div>
    )
}

export default Pagination