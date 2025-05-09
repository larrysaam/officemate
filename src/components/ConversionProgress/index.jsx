import { motion } from 'framer-motion';
import { 
    ProgressContainer, 
    ProgressBar, 
    ProgressText 
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