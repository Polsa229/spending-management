
import Logo from "../assets/Logo.png"

const FooterSection = () => {

    return (
        <div className=" bg-primary flex flex-col items-center justify-center p-10 gap-8">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 xl:grid-cols-3  w-full max-w-6xl mb-3">
                {/* Premier Card */}
                <div>
                    <h3 className="text-xl font-bold text-light">Contact</h3>
                    <div className=" space-y-0">
                        <p className="text-light/70 mt-2 text-sm">
                            Work inquires: work@vaultflow.com
                        </p>
                        <p className="text-light/70 mt-2 text-sm">
                            PR and speaking: press@vaultflow.com
                        </p>
                        <p className="text-light/70 mt-2 text-sm">
                            New business: newbusiness@vaultflow.com
                        </p>
                    </div>
                </div>

                {/* deuxieme Card */}
                <div>
                    <h3 className="text-xl font-bold text-light">Address</h3>
                    <div className=" space-y-0">
                        <p className="text-light/70 mt-2 text-sm">
                            398 11th Street, Floor 2
                        </p>
                        <p className="text-light/70 mt-2 text-sm">
                            San Francisco, CA 94103
                        </p>
                    </div>
                </div>
                {/* Card  vide*/}
                <div />

                {/* troisieme Card */}
                <div className="">
                    <h3 className="text-xl font-bold text-light">Careers</h3>
                    <p className="text-light/70 mt-2 text-sm">
                        Careers@vaultflow.com
                    </p>
                </div>

                {/* quatrieme Card */}
                <div>
                    <h3 className="text-xl font-bold text-light">Social</h3>
                    <div className=" space-y-0">
                        <p className="text-light/70 mt-2 text-sm">
                            Twitter
                        </p>
                        <p className="text-light/70 mt-2 text-sm">
                            Instagram
                        </p>
                        <p className="text-light/70 mt-2 text-sm">
                            Tik Tok
                        </p>
                    </div>
                </div>
                {/* Card vide */}
                <div className='' />
            </div>

            <div className="w-full md:max-w-6xl flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 text-[#939393]">
                {/* Texte */}
                <div className="hidden md:flex text-center text-sm">
                    © 2023 Vaultflow. All Rights Reserved.
                </div>

                {/* Logo */}
                <div className="text-lg font-bold">
                    <img src={Logo} alt="Vaultflow Logo" className="h-8 w-auto" />
                </div>

                {/* Texte */}
                <div className="flex md:hidden text-center md:text-left text-sm">
                    © 2023 Vaultflow. All Rights Reserved.
                </div>
            </div>
        </div>
    );
};

export default FooterSection;

