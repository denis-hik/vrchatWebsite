import React from "react";
import Button from "../../../../MAl/Components/ButtonUI";

type ItemAssetType = {
    name: string,
    image: string,
    setIndex: () => void;
    tags: string;
}

export const    ItemAsset: React.FC<ItemAssetType> = ({name, image, setIndex, tags}) => {

    const data = tags ? tags.split('[')[1].split(']')[0].split(",") : [''];

    return (
        <Button
            tags={data}
            image={image}
            text={name}
            onClick={setIndex}
        />
    )
}