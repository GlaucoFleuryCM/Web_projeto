import React from "react";

import { FaClipboardList } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";
import { RiArrowUpSFill } from "react-icons/ri";
import { IoIosPaper } from "react-icons/io";

export const SidebarData = [
    {
        title: "Movimentações (Histórico)",
        icon: <FaClipboardList />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,

        subNav: [
            {
                title: "Movimentações Recentes",
                path: "/logs/recente",
                icon: <IoIosPaper />,
            },
            {
                title: "Todas as Movimentações",
                path: "/logs/geral",
                icon: <IoIosPaper />,
            },
        ],
    },
    {
        title: "Registrar Saída",
        path: "/saida",
        icon: <FaShippingFast />,
    },
    {
        title: "Veículos",
        path: "/veiculos",
        icon: <FaCar />,
    },
    {
        title: "Gerenciar Sistema",
        path: "/gerenciar",
        icon: <MdOutlineManageAccounts />,
    },


];