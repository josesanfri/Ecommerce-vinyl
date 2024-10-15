export type FilterTypes = {
    result: ResultFilterTypes | null;
    loading: boolean;
    error: string;
};

export type ResultFilterTypes = {
    schema:{
        attributes: {
            format: {
                enum: string[];
            }
        }
    }
};