import { Typography } from "@material-tailwind/react";


const Footer = () => {
  return (
    <footer className="gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 lg:mt-8 text-center">
        <div className="flex w-full flex-row flex-wrap items-center justify-center md:justify-between">
            <Typography color="blue-gray" className="lg:mx-6 font-normal">
                &copy; 2023 Mwapsam
            </Typography>
            <ul className="flex flex-wrap items-center gap-y-2 gap-6 lg:gap-x-8 lg:mx-12">
            <li>
                <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                >
                About Us
                </Typography>
            </li>
            <li>
                <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                >
                License
                </Typography>
            </li>
            <li>
                <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                >
                Contribute
                </Typography>
            </li>
            <li>
                <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                >
                Contact Us
                </Typography>
            </li>
            </ul>
        </div>

    </footer>
  )
}

export default Footer