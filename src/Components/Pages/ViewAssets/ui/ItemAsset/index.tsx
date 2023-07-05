import React from "react";
import Button from "../../../../MAl/Components/ButtonUI";

type ItemAssetType = {
    name: string,
    image: string,
    setIndex: () => void;
    tags: string[];
}

export const    ItemAsset: React.FC<ItemAssetType> = ({name, image, setIndex, tags}) => {

    return (
        <Button
            tags={tags}
            image={image}
            text={name}
            onClick={setIndex}
        />
    )
}