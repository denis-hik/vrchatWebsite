export const REQUEST_SERVER = 'https://request.denishik.ru/'
export const REQUEST_SERVER_GUMROAD = {url: 'https://discover.gumroad.com/', id: "836363212747"}

export type worldsTypes = {
    name: string,
    url: string,
    image: string,
    tag: string,
    ex: string,
    gallery: [string]
}

export type dataAssetType = {
    name: string,
    image: string,
    des: string,
    download: string,
    id: string | number,
    tags: string[],
    images?: string[] | null,
}

export type dataAvatarType = { cost: number; des: string; need: boolean | string[]; name: string; id: string }