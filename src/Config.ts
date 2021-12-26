import {HexColorString, Snowflake} from "discord.js";

export type Config = { botCommandsChannelId: Snowflake; color: HexColorString, guildId: string, clientId: string }

export const config: Config = {
    color: "#0xC6BFF7",
    botCommandsChannelId: '821820015917006868',
    clientId: '904478222455029821',
    guildId: '821743100203368458'
}