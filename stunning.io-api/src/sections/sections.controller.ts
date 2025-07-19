import { Body, Controller, Post } from "@nestjs/common";
import { SectionsService } from "./sections.service";

@Controller('sections')
export class SectionsController {
    constructor(private readonly sectionsService: SectionsService) {}

    @Post()
    generateSections(@Body('prompt') prompt: string) {
        return this.sectionsService.generateSections(prompt);
    }
}