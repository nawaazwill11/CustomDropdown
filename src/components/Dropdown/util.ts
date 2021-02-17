import { Option } from '../../common/types'
import { TFormattedData, TFormattedDataNode } from './types'

export const getFormattedData = (data: Option[]): TFormattedData => {
    const formatted_data: TFormattedData = []

    data.forEach((item, index) => {
        if (doesDataHasString(item)) {
            formatted_data.push(createFormattedDataNode(index, item))
        } else if (doesDataHasObject(item)) {
            formatted_data.push(createFormattedDataNode(index, item.title))
        }
    })
    return formatted_data
}

const createFormattedDataNode = (
    id: number,
    value: string,
    selected = false,
    visible = true
): TFormattedDataNode => {
    return {
        id,
        value,
        selected,
        visible
    }
}

const doesDataHasString = (data: Option): data is string => {
    return typeof data === 'string'
}

const doesDataHasObject = (
    data: Option
): data is { title: string } => {
    return typeof data === 'object'
}