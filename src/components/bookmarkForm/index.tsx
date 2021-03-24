import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import CreatableSelect from 'react-select/creatable';

import { MainContext } from '../../app';
import { Tag } from '../../app/interfaces';
import { Button } from '../buttons';
import { Form, LabelText, InputText, HelpText, ErrorText } from './styledComponents';

type Props = {
    onSubmit: (url: string, tags: Tag[]) => void;
    isLoading?: boolean;
    tags?: Tag[];
    url?: string;
};

export const BookmarkForm = ({ onSubmit, isLoading = false, url, tags }: Props) => {
    const { state } = useContext(MainContext);
    const [tagsValue, setTagsValue] = useState(tags ? tags : []);
    const [urlValue, setUrlValue] = useState(url ? url : "");
    const [error, setError] = useState("");
    const urlError = "Veuillez renseigner l'url";

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (!urlValue) {
            setError(urlError);
        } else {
            const formattedTagsValues = tagsValue.map(tag => ({ label: tag.label, value: tag.value }));

            onSubmit(urlValue, formattedTagsValues);
        }

    }

    const handleSelectChange = (selectedOption: any) => {
        setTagsValue(selectedOption);
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value) {
            setError("");
        } else {
            setError(urlError);
        }

        setUrlValue(event.target.value);
    }


    return (
        <Form onSubmit={handleSubmit}>
            <label htmlFor="url-input">
                <LabelText>Url</LabelText>
                <InputText id="url-input" type="url" name="url-input" value={urlValue} onChange={handleInputChange} placeholder="Url..." required disabled={url ? true : false} />
                {error && <ErrorText>{error}</ErrorText>}
            </label>
            <label htmlFor="tags-select">
                <LabelText>Mots clés</LabelText>
                <HelpText>Afin de créer un mot-clé, veuillez l'écrire puis sélectionner "Créer le mot-clé xxx"</HelpText>
                <CreatableSelect
                    isMulti
                    onChange={handleSelectChange}
                    value={tagsValue}
                    placeholder='Mots clés ...'
                    noOptionsMessage={() => "Aucun mot-clé disponible"}
                    formatCreateLabel={(formatCreateLabel) => `Créer le mot-clé "${formatCreateLabel}"`}
                    inputId='tags-select'
                    options={state.tags}
                />
            </label>
            <Button type="submit" disabled={isLoading}>
                Valider
            </Button>
        </Form>
    );
};

export default BookmarkForm;