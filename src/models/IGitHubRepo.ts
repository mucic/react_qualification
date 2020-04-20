// Model of Github data
// Expected data structure from Git API //
export interface IGitHubRepo {
    id: number;
    node_id: string;
    name: string;
    html_url: string;
}
