import styled from "styled-components";
import TagsUI from "../../../../MAl/Components/TagsUI";

export const TagsBlock = styled(TagsUI)`
  position: absolute;
  bottom: 50px;
  right: 0;
  left: 0;
`

export const ActionsBlock = styled.div`
  position: absolute;
  bottom: 10px;
  right: 0;
  left: 0;
  gap: 10px;
  height: 40px;
  display: flex;
  
  .button-action-0 {
    flex: 1;
    h4 {
      display: flex;
      flex-wrap: nowrap;
      white-space: nowrap;
    }
  }
  .button-action-1 {
    flex: 4;
  }
`