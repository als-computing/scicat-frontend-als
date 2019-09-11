import { DatasetFilters, Dataset, ArchViewMode } from "state-management/models";

export interface DateTriple {
  year: number;
  month: number;
  day: number;
}

export interface FacetCount {
  _id?: string | DateTriple;
  count: number;
}

export interface FacetCounts {
  [field: string]: FacetCount[];
}

export interface DatasetState {
  datasets: Dataset[];
  selectedSets: Dataset[];
  currentSet: Dataset;
  facetCounts: FacetCounts;
  totalCount: number;
  datasetsLoading: boolean;
  facetCountsLoading: boolean;
  deletingAttachment: boolean;
  addingAttachment: boolean;
  hasPrefilledFilters: boolean;

  searchTerms: string;
  keywordsTerms: string;
  filters: DatasetFilters;

  batch: Dataset[];

  result: object;
  resultLoading: boolean;
}

export const initialDatasetState: DatasetState = {
  datasets: [],
  selectedSets: [],
  currentSet: null,
  facetCounts: {},
  totalCount: 0,
  datasetsLoading: true,
  deletingAttachment: false,
  addingAttachment: false,
  facetCountsLoading: true,
  hasPrefilledFilters: false,

  searchTerms: "",
  keywordsTerms: "",
  batch: [],

  result: {},
  resultLoading: false,

  filters: {
    modeToggle: ArchViewMode.all,
    mode: {},
    text: "",
    creationTime: null,
    type: [],
    creationLocation: [],
    ownerGroup: [],
    skip: 0,
    limit: 25,
    sortField: "creationTime:desc",
    keywords: [],
    scientific: [],
    isPublished: false
  }
};
