import logo from "../images/logo-new.png"

const Footer = () => {
    return (
        <>
            <div className="flex bg-slate-200">
                <img src={logo} alt="footer-logo" className='w-96 h-80'/>
                <div className="font-serif pl-12 pt-12 flex">
                    <div className="pr-72">
                        <p className="pb-8 text-lg">Links</p>
                        <p className="text-sm pb-3">Product</p>
                        <p className="text-sm pb-3">What's New</p>
                        <p className="text-sm pb-3">Pricing</p>
                        <p className="text-sm pb-3">Business</p>
                        <p className="text-sm pb-3">Enterprise</p>
                    </div>
                    <div className="pr-72">
                        <p className="pb-8 text-lg">General</p>
                        <p className="text-sm pb-3">Customers</p>
                        <p className="text-sm pb-3">Careers</p>
                        <p className="text-sm pb-3">API</p>
                        <p className="text-sm pb-3">Support Us</p>
                    </div>
                    <div className="pr-72">
                        <p className="pb-8 text-lg">Social</p>
                        <p className="text-sm pb-3">LinkedIn</p>
                        <p className="text-sm pb-3">Twitter</p>
                        <p className="text-sm pb-3">Instagram</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;