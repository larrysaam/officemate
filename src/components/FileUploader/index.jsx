import { useDropzone } from 'react-dropzone';
import { 
    DropzoneContainer, 
    DropzoneContent,
    UploadIcon,
    AcceptedFormats 
} from '../../assets/style/styles';

export const FileUploader = ({ onFileUpload, acceptedFiles }) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: acceptedFiles.join(','),
        multiple: false,
        onDrop: ([file]) => file && onFileUpload(file)
    });

    return (
        <DropzoneContainer {...getRootProps()} isDragActive={isDragActive}>
            <input {...getInputProps()} />
            <DropzoneContent>
                <UploadIcon />
                {isDragActive ? (
                    <p>Drop your file here...</p>
                ) : (
                    <>
                        <p>Drag & drop your file here, or click to select</p>
                        <AcceptedFormats>
                            Supported formats: {acceptedFiles.join(', ')}
                        </AcceptedFormats>
                    </>
                )}
            </DropzoneContent>
        </DropzoneContainer>
    );
};