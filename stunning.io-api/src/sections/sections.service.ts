import { Injectable } from "@nestjs/common";
import { Section } from "./section.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class SectionsService {
    constructor(
        @InjectModel('Section') private readonly sectionModel: Model<Section>,
    ) {}
    private sectionsList = [
        "Hero",
        "About",
        "Services",
        "Projects",
        "Contact",
        "Footer",
        "Testimonials",
        "FAQ",
        "Pricing",
        "Team",
        "Blog",
        "Gallery",
    ]

    async generateSections(prompt: string) {
        const shuffled = [...this.sectionsList].sort(() => 0.5 - Math.random());
        const sections = shuffled.slice(0, 3);
        console.log(sections);
        await this.createSection(prompt, sections);
        return {
            prompt: prompt,
            sections: sections,
        };
    }

    async createSection(prompt: string, sections: string[]) {
        const newSection = new this.sectionModel({ prompt, sections });
        await newSection.save();
        return newSection;
    }
}