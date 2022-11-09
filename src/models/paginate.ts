export type searchDetailsType = {
    searchValue: string;
    searchBy: string;
};

export type paginateType = {
    currentPage: number;
    prodPerPage: number;
    pages: number[];
    searchDetails: searchDetailsType;
};