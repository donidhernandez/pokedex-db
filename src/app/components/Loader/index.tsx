import { CircleLoader } from 'react-spinners';

const Loader = () => {
    return (
        <section className="flex h-screen justify-center items-center w-full">
            <CircleLoader color="#dc2626" />
        </section>
    );
};

export default Loader;
