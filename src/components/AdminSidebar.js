import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    DrawerContent,
    DrawerOverlay,
    Drawer,
    Icon,
    InputGroup,
    InputLeftElement,
    Input,
    Text,
    Collapse,
  } from "@chakra-ui/react";
  import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
  import { Outlet, NavLink } from "react-router-dom";
  import { FaBell } from "react-icons/fa";
  
  const linkItems = [
    { name: "Home", href: "/admin" },
    { name: "Students", href: "/admin/students" },
    { name: "Teachers", href: "/teachers" },
    { name: "Modules", href: "/modules" },
    // { name: "Results", href: "/results" },
  ];
  
  const AdminSidebar = () => {
    const sidebar = useDisclosure();
    const integrations = useDisclosure();
    const color = useColorModeValue("gray.600", "gray.300");
  
    const NavItem = (props) => {
      const { icon, children, ...rest } = props;
      return (
        <Flex
          align="center"
          px="4"
          pl="4"
          py="3"
          cursor="pointer"
          color="inherit"
          _dark={{
            color: "gray.400",
          }}
          _hover={{
            bg: "gray.100",
            _dark: {
              bg: "gray.900",
            },
            color: "gray.900",
          }}
          role="group"
          fontWeight="semibold"
          transition=".15s ease"
          {...rest}
        >
          {icon && (
            <Icon
              mx="2"
              boxSize="4"
              _groupHover={{
                color: color,
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      );
    };
  
    const SidebarContent = (props) => (
      <Box
        as="nav"
        pos="fixed"
        top="0"
        left="0"
        zIndex="sticky"
        h="full"
        pb="10"
        overflowX="hidden"
        overflowY="auto"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        border
        color="inherit"
        borderRightWidth="1px"
        w="60"
        {...props}
      >
        <Flex px="4" py="5" align="center">
          <Text
            fontSize="2xl"
            ml="2"
            color="brand.500"
            _dark={{
              color: "white",
            }}
            fontWeight="semibold"
          >
            Educanva
          </Text>
        </Flex>
        <Flex
          direction="column"
          as="nav"
          fontSize="sm"
          color="gray.600"
          aria-label="Main Navigation"
        >
          {linkItems.map((link) => (
            <NavLink to={link.href} key={link.name}>
              <NavItem>{link.name}</NavItem>
            </NavLink>
          ))}
          {/* <NavItem onClick={integrations.onToggle}>
            Integrations
            <Icon
              a
              ml="auto"
              transform={integrations.isOpen && "rotate(90deg)"}
            />
          </NavItem> */}
          {/* <Collapse in={integrations.isOpen}>
            <NavItem pl="12" py="2">
              Shopify
            </NavItem>
            <NavItem pl="12" py="2">
              Slack
            </NavItem>
            <NavItem pl="12" py="2">
              Zapier
            </NavItem>
          </Collapse>
          <NavItem>Changelog</NavItem> */}
          {/* <NavItem>Settings</NavItem> */}
        </Flex>
      </Box>
    );
  
    return (
      <Box
        as="section"
        bg="gray.50"
        _dark={{
          bg: "gray.700",
        }}
        minH="100vh"
      >
        <SidebarContent
          display={{
            base: "none",
            md: "unset",
          }}
        />
        <Drawer
          isOpen={sidebar.isOpen}
          onClose={sidebar.onClose}
          placement="left"
        >
          <DrawerOverlay />
          <DrawerContent>
            <SidebarContent w="full" borderRight="none" />
          </DrawerContent>
        </Drawer>
        <Box
          ml={{
            base: 0,
            md: 60,
          }}
          transition=".3s ease"
        >
          <Flex
            as="header"
            align="center"
            justify=""
            w="full"
            px="4"
            bg="white"
            _dark={{
              bg: "gray.800",
            }}
            borderBottomWidth="1px"
            color="inherit"
            h="14"
          >
            <IconButton
              aria-label="Menu"
              display={{
                base: "inline-flex",
                md: "none",
              }}
              onClick={sidebar.onOpen}
              icon={<HamburgerIcon />}
              size="sm"
            />
            
  
            <Flex align='center' justifyContent={'end'} width={'full'} gap={'16px'}>
              <Menu>
              <Icon color="gray.500" as={FaBell} cursor="pointer" />
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  
                  <Avatar
                    size={'sm'}
                    src={
                      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>Link 1</MenuItem>
                  <MenuItem>Link 2</MenuItem>
                  <MenuDivider />
                  <MenuItem>Link 3</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
  
          <Box as="main" p="4">
            <Outlet />
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default AdminSidebar;
  