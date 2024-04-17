// const Header = dynamic(() => import('../components/header'), { ssr: false });
export const Header = () => {
    return (
        <div className="bg-slate-200 p-6">
            <h1 className='text-xl text-black font-bold'>Split-Pay</h1>
        </div >
    )
}