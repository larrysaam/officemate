import styled from '@emotion/styled';
import { FiUploadCloud } from 'react-icons/fi';

export const StyledContainer = styled.div`
    padding: 24px;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
`;

export const Title = styled.h1`
    font-size: 2rem;
    color: #1a237e;
    margin-bottom: 1rem;
`;

export const Description = styled.p`
    color: #666;
    margin-bottom: 2rem;
`;

export const DropzoneContainer = styled.div`
    border: 2px dashed ${props => props.isDragActive ? '#2ECC71' : '#ddd'};
    border-radius: 16px;
    padding: 40px 20px;
    background: ${props => props.isDragActive ? 'rgba(46, 204, 113, 0.1)' : '#f8f9fa'};
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        border-color: #2ECC71;
        background: rgba(46, 204, 113, 0.05);
    }
`;

export const DropzoneContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    color: #666;
`;

export const UploadIcon = styled(FiUploadCloud)`
    font-size: 48px;
    color: #2ECC71;
    margin-bottom: 8px;
`;

export const AcceptedFormats = styled.p`
    font-size: 0.875rem;
    color: #888;
    margin-top: 8px;
`;


// ...existing code...

export const ProgressContainer = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 40px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

export const ProgressBar = styled.div`
    width: 100%;
    height: 8px;
    background-color: #f0f0f0;
    border-radius: 100px;
    overflow: hidden;
    position: relative;
`;

export const ProgressText = styled.p`
    color: #2ECC71;
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;

    &::after {
        content: '';
        width: 8px;
        height: 8px;
        background: linear-gradient(45deg, #2ECC71, #0f73e4);
        border-radius: 50%;
        display: inline-block;
        animation: pulse 1s ease-in-out infinite;
    }

    @keyframes pulse {
        0% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.5); opacity: 0.5; }
        100% { transform: scale(1); opacity: 1; }
    }
`;