import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 lg:mt-8 text-center">
        <div className="flex w-full flex-row flex-wrap items-center justify-center md:justify-between">
            <Typography color="blue-gray" className="lg:mx-6 font-normal">
                &copy; 2023 Mwapsam
            </Typography>
            <ul className="flex flex-wrap items-center gap-y-2 gap-6 lg:gap-x-8 lg:mx-12">
                <li>
                    <Link
                        to='/coming-soon'
                        className="font-normal transition-colors hover:text-green-500 focus:text-green-500"
                    >
                        About Us
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/coming-soon'
                        className="font-normal transition-colors hover:text-green-500 focus:text-green-500"
                    >
                        License
                    </Link>
                </li>
                <li>
                    <Link
                        to='/coming-soon'
                        className="font-normal transition-colors hover:text-green-500 focus:text-green-500"
                    >
                        Contribute
                    </Link>
                </li>
                <li>
                    <Link
                        to='/coming-soon'
                        className="font-normal transition-colors hover:text-green-500 focus:text-green-500"
                    >
                        Contact Us
                    </Link>
                </li>
            </ul>
        </div>

    </footer>
  )
}

export default Footer