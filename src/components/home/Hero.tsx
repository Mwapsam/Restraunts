import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";

const Hero = () => {
  return (
    <Card
        style={{borderRadius: 0}}
        shadow={false}
        className="relative grid h-[22rem] w-full items-end justify-center overflow-hidden text-center"
    >
        <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 w-full rounded-none bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat"
        >
            <div className="to-bg-black-10 absolute inset-0 w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-8 px-6 m-8 md:px-12 backdrop-blur-md">
            <Typography
                variant="h2"
                color="white"
                className="mb-6 font-medium leading-[1.5] capitalize"
            >
                The most beautiful restraunts in town. enjoy!
            </Typography>
            <Typography variant="h5" className="mb-4 text-gray-400">
                2023 Lusaka
            </Typography>
        </CardBody>
    </Card>
  )
}

export default Hero;