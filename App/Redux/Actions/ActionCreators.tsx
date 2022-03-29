import { SAVE_DATA } from '../Constants/index';
export function SaveData(item:any) {
return {
type: SAVE_DATA,
payload: item,

}
}