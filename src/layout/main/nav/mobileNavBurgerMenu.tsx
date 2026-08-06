'use client';

import type { NavBarChildItem, NavBarItem } from '@/_types/_header';
import LinkComponent from '@/components/linkComponent';
import { ALL_NAVBAR_ITEMS } from '@/mockData/navData';
import {
  ButtonBase,
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import clsx from 'clsx';
import * as React from 'react';
import { FaRegCircle } from 'react-icons/fa';
import { IoMenuOutline } from 'react-icons/io5';
import { TfiAngleDown, TfiAngleLeft } from 'react-icons/tfi';
import TopSideBarSectionMobile from './topSideBarSectionMobile';

export default function MobileNavBurgerMenu() {
  const [open, setOpen] = React.useState(false);
  const [openedNavItemId, setOpenedNavItemId] = React.useState<number | null>(null);
  const [openedChildItemId, setOpenedChildItemId] = React.useState<number | null>(null);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  const toggleOpenNavBarItem = (
    event: React.MouseEvent<HTMLButtonElement>,
    navBarItem: NavBarItem,
  ) => {
    event.stopPropagation();
    setOpenedNavItemId((currentId) =>
      currentId === navBarItem.id ? null : navBarItem.id,
    );
    setOpenedChildItemId(null);
  };

  const toggleOpenNavBarChildItem = (
    event: React.MouseEvent<HTMLButtonElement>,
    navBarChildItem: NavBarChildItem,
  ) => {
    event.stopPropagation();
    setOpenedChildItemId((currentId) =>
      currentId === navBarChildItem.id ? null : navBarChildItem.id,
    );
  };

  return (
    <div>
      <ButtonBase
        type="button"
        className="!rounded-xl bg-grey-200 p-2"
        onClick={toggleDrawer(true)}
        aria-label="باز کردن منوی اصلی"
      >
        <IoMenuOutline className="size-6" />
      </ButtonBase>

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        slotProps={{
          paper: {
            className: 'w-navbar-drawer',
          },
        }}
      >
        <div className="w-full" role="navigation" aria-label="منوی موبایل">
          <TopSideBarSectionMobile />

          <List disablePadding>
            {ALL_NAVBAR_ITEMS.map((navItem) => {
              const hasChildren = navItem.children.length > 0;
              const isNavItemOpen = openedNavItemId === navItem.id;

              return (
                <React.Fragment key={navItem.id}>
                  <ListItem
                    disablePadding
                    className={clsx(
                      'flex w-full items-stretch',
                      isNavItemOpen && 'bg-background-default',
                    )}
                  >
                    <ListItemButton
                      component={LinkComponent}
                      href={navItem.path ?? '#'}
                      onClick={closeDrawer}
                      className="flex min-h-14 flex-1 items-center gap-2"
                    >
                      <FaRegCircle className="shrink-0 text-info-main" />
                      <ListItemText primary={navItem.faName} />
                    </ListItemButton>

                    {hasChildren ? (
                      <ButtonBase
                        type="button"
                        onClick={(event) => toggleOpenNavBarItem(event, navItem)}
                        className="flex w-14 shrink-0 items-center justify-center self-stretch"
                        aria-label={
                          isNavItemOpen
                            ? `بستن ${navItem.faName}`
                            : `باز کردن ${navItem.faName}`
                        }
                        aria-expanded={isNavItemOpen}
                      >
                        {isNavItemOpen ? <TfiAngleDown /> : <TfiAngleLeft />}
                      </ButtonBase>
                    ) : null}
                  </ListItem>

                  {hasChildren ? (
                    <Collapse in={isNavItemOpen} timeout="auto">
                      <List disablePadding className="bg-background-default">
                        {navItem.children.map((childItem) => {
                          const hasChildItems = Boolean(childItem.children?.length);
                          const isChildItemOpen = openedChildItemId === childItem.id;

                          return (
                            <React.Fragment key={childItem.id}>
                              <ListItem
                                disablePadding
                                className="flex w-full items-stretch"
                              >
                                <ListItemButton
                                  component={LinkComponent}
                                  href={childItem.path ?? '#'}
                                  onClick={closeDrawer}
                                  className="flex min-h-12 flex-1 items-center gap-2 pr-8"
                                >
                                  <ListItemText primary={childItem.faName} />
                                </ListItemButton>

                                {hasChildItems ? (
                                  <ButtonBase
                                    type="button"
                                    onClick={(event) =>
                                      toggleOpenNavBarChildItem(event, childItem)
                                    }
                                    className="flex w-14 shrink-0 items-center justify-center self-stretch"
                                    aria-label={
                                      isChildItemOpen
                                        ? `بستن ${childItem.faName}`
                                        : `باز کردن ${childItem.faName}`
                                    }
                                    aria-expanded={isChildItemOpen}
                                  >
                                    {isChildItemOpen ? (
                                      <TfiAngleDown />
                                    ) : (
                                      <TfiAngleLeft />
                                    )}
                                  </ButtonBase>
                                ) : null}
                              </ListItem>

                              {hasChildItems ? (
                                <Collapse in={isChildItemOpen} timeout="auto">
                                  <List disablePadding>
                                    {childItem.children?.map((subChild) => (
                                      <ListItem
                                        key={subChild.id}
                                        disablePadding
                                        className="bg-background-default"
                                      >
                                        <ListItemButton
                                          component={LinkComponent}
                                          href={subChild.path}
                                          onClick={closeDrawer}
                                          className="min-h-11 pr-12"
                                        >
                                          <ListItemText primary={subChild.faName} />
                                        </ListItemButton>
                                      </ListItem>
                                    ))}
                                  </List>
                                </Collapse>
                              ) : null}
                            </React.Fragment>
                          );
                        })}
                      </List>
                    </Collapse>
                  ) : null}
                </React.Fragment>
              );
            })}
          </List>
        </div>
      </Drawer>
    </div>
  );
}
