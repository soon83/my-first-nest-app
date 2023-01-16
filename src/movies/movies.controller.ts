import {
  Body,
  Query,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('/movies')
export class MoviesController {
  @Post()
  create(@Body() movieCreateRequest) {
    return {
      ...movieCreateRequest,
    };
  }

  @Get()
  getAll() {
    return '모든 무비를 너에게 주겠다';
  }

  @Get('/search')
  search(@Query('year') year: string) {
    return `search year: ${year}`;
  }

  @Get('/:id')
  get(@Param('id') movieId: string) {
    return `하나의 무비를 너에게 주겠다 ${movieId}`;
  }

  @Put('/:id')
  edit(@Param('id') movieId: string) {
    return `수정되었다 ㅋ ${movieId}`;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `삭제 어쩌구 저쩌구 ㅋㅋ ${movieId}`;
  }
}
