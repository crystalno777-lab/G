import { type LavalinkNodeOptions, NodeType } from "lavalink-client";

export const nodes: LavalinkNodeOptions[] = [
    {
        id: "Nazha-SG-Primary",
        host: "sg-1.nazha.online",
        port: 443,
        authorization: "https://discord.gg/XeSCnk57ZF",
        secure: true,
        nodeType: NodeType.Lavalink,
    },
    {
        id: "Nazha-SG-Backup",
        host: "sg-2.nazha.online",
        port: 443,
        authorization: "https://discord.gg/XeSCnk57ZF",
        secure: true,
        nodeType: NodeType.Lavalink,
    },
];
