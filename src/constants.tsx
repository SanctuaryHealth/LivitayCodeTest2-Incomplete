import React from "react"

import { Checkbox, MenuItem } from "@material-ui/core"

interface IMenuItem {
    name: string
    displayName: string
}

export const menuItemMapping = (data: IMenuItem[], value?: string | string[]) =>
    data.map((option, index) => (
        <MenuItem value={option.name} key={index}>
            {value !== undefined && <Checkbox checked={Array.isArray(value) ? value.includes(option.name) : value === option.name} />}
            {option.displayName}
        </MenuItem>
    ))

export const Categories = [
    { name: "yoga", displayName: "Yoga" },
    { name: "mindfulness", displayName: "Mindfulness" },
    { name: "massage", displayName: "Massage" },
    { name: "pilates", displayName: "Pilates" },
    { name: "dance", displayName: "Dance" },
    { name: "boxing", displayName: "Boxing" },
    { name: "hiit", displayName: "Hiit" },
    { name: "learning", displayName: "Learning and Development" },
    { name: "meditation", displayName: "Meditation" },
    { name: "spinning", displayName: "Spinning" },
    { name: "nutrition", displayName: "Nutrition" },
    { name: "talk", displayName: "Talk" },
    { name: "workshop", displayName: "Wellbeing Workshop" },
    { name: "beauty", displayName: "Beauty" }
].sort((a, b) => (a.displayName < b.displayName ? -1 : b.displayName < a.displayName ? 1 : 0))

export const categoryOptions = (categories: string[]) => menuItemMapping(Categories, categories)

export const Collections = [
    { name: "sweat", displayName: "Sweat" },
    { name: "chill", displayName: "Chill" },
    { name: "team", displayName: "Team" },
    { name: "fresh", displayName: "Fresh" },
    { name: "random", displayName: "Random" },
    { name: "destress", displayName: "Destress" },
    { name: "recharge", displayName: "Recharge" },
    { name: "calm", displayName: "Calm" },
    { name: "bonding", displayName: "Bonding" },
    { name: "education", displayName: "Education" },
    { name: "enlightenment", displayName: "Enlightenment" },
    { name: "inspiration", displayName: "Inspiration" },
    { name: "skill", displayName: "Skill development" }
].sort((a, b) => (a.displayName < b.displayName ? -1 : b.displayName < a.displayName ? 1 : 0))

export const collectionOptions = (collections: string[]) => menuItemMapping(Collections, collections)
