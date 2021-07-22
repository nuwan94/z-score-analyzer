import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectMenu: {
            background: theme.palette.background.default,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

export default function SimpleSelect() {
    const classes = useStyles();
    const [, i18n] = useTranslation();
    const [language, setLanguage] = useState(i18n.language);

    const handleChangeLanguage = (e: any) => {
        const { value } = e.target;
        setLanguage(value as string);
        i18n.changeLanguage(value as string);
    }

    return (
        <div>
            <FormControl className={classes.formControl} size="small">
                <Select variant="outlined"
                    className={classes.selectMenu}
                    value={language}
                    onChange={handleChangeLanguage}
                >
                    <MenuItem value={'en'}>English</MenuItem>
                    <MenuItem value={'si'}>Sinhala</MenuItem>
                    <MenuItem value={'ta'}>Tamil</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}