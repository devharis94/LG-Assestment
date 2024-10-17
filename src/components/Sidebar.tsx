const Sidebar: React.FC = ({ }) => {
    return (
        <aside className="top-0 fixed flex flex-col justify-between items-center bg-white py-12 w-32 h-[calc(100vh-60px)]">
            <img src="/images/logo.svg" alt="Logo" className="w-full h-40 -rotate-90" />
            <p className="text-brand-dark transform -rotate-90">Reporting</p>
        </aside>
    )
}
export default Sidebar