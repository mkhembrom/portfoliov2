import { TypeAnimation } from 'react-type-animation';

const AnimateWord = () => {
    return (
        <TypeAnimation
            sequence={[
                'web', // Types 'One'
                2000, // Waits 1s
                'flutter', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                'api',
                2000, // Types 'Three' without deleting 'Two'
            ]}
            speed={50}
            wrapper="span"
            cursor={true}
            repeat={Infinity}

        />
    );
};

export default AnimateWord;