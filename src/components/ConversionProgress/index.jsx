import { motion } from 'framer-motion';
import { FaFileAlt } from 'react-icons/fa';
import { 
    ProgressContainer, 
    ProgressBar, 
    ProgressText,
    LoaderContainer, 
    LoaderText,
    IconWrapper
} from '../../assets/style/styles';



export const ConversionProgress = ({ progress }) => {
    return (
        <ProgressContainer>
            <ProgressBar>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                    style={{
                        height: '100%',
                        background: 'linear-gradient(45deg, #2ECC71, #0f73e4)',
                        borderRadius: 'inherit'
                    }}
                />
            </ProgressBar>
            <ProgressText>{progress}% Converting...</ProgressText>
        </ProgressContainer>
    );
};





// extracting loader

export const ExtractingLoader = () => {
    return (
        <LoaderContainer>
            <IconWrapper>
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <FaFileAlt size={40} />
                </motion.div>
            </IconWrapper>
            <LoaderText>
                <motion.div
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    Extracting text from your image...
                </motion.div>
            </LoaderText>
        </LoaderContainer>
    );
};