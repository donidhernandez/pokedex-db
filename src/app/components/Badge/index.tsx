'use client';

import { BadgeColors, Badges } from '@/app/utils/enums';

interface IBadge {
    type: Badges;
}

const Badge = ({ type }: IBadge) => {
    if (Object.values(Badges).includes(type)) {
        const badgeIndex = Object.keys(BadgeColors).indexOf(type);
        const badgeValue = Object.values(BadgeColors)[badgeIndex];

        return (
            <div
                className=" text-white px-4 rounded-full text-xl"
                style={{ backgroundColor: badgeValue }}
            >
                {type}
            </div>
        );
    }
};

export default Badge;
