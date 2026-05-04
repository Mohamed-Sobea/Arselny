export type TransferStatus = 'idle' | 'pending' | 'transferring' | 'completed' | 'error';

export interface FileMetadata {
    name: string;
    size: number;
    type: string;
    checksum: string; 
}