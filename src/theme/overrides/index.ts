import MuiButton from '@/theme/overrides/MuiButton';
import MuiCard from '@/theme/overrides/MuiCard';
import MuiContainer from '@/theme/overrides/MuiContainer';
import MuiIconButton from '@/theme/overrides/MuiIconButton';
import MuiSkeleton from '@/theme/overrides/MuiSkeleton';
import { Theme } from '@mui/material/styles';
import MuiPagination from './MuiPagination';
import MuiSwitch from './MuiSwitch';

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    MuiButton(theme),
    MuiSkeleton(theme),
    MuiCard(theme),
    MuiIconButton(theme),
    MuiContainer(theme),
    MuiSwitch(theme),
    MuiPagination(theme),
    MuiIconButton(theme),
  );
}
