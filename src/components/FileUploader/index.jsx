import { useDropzone } from 'react-dropzone';
import { FiUploadCloud } from 'react-icons/fi';
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



// file uploader for teext extraction from images *****************************

export const ImageUploader = ({ onFileUpload }) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: {
            'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.bmp']
        },
        maxFiles: 1,
        onDrop: ([file]) => file && onFileUpload(file)
    });

    return (
        <DropzoneContainer {...getRootProps()} isDragActive={isDragActive}>
            <input {...getInputProps()} />
            <DropzoneContent>
                <UploadIcon as={FiUploadCloud} />
                <p>
                    {isDragActive
                        ? 'Drop your image here...'
                        : 'Drag & drop an image, or click to select'}
                </p>
                <small>Supported formats: PNG, JPG, JPEG, GIF, BMP</small>
            </DropzoneContent>
        </DropzoneContainer>
    );
};