import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { Roles } from 'src/auth/autorizacao/roles.decorator';
import { CarrosselService } from './carrossel.service';
import { CarrosselDto } from './dto/carrossel.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Carrossel')
@Controller('carrosseis')
export class CarrosselController {
  constructor(private readonly carrosselService: CarrosselService) { }

  @Post()
  @ApiOperation({ summary: 'Criar carrossel' })
  @ApiResponse({
    status: 201,
    description: 'carrossel criado.',
    type: CarrosselDto,
  })
  create(@Body() createCarrosselDto: CarrosselDto) {
    return this.carrosselService.create(createCarrosselDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as imagens do carrossel.' })
  @ApiResponse({
    status: 200,
    description: 'Listar imagens do carrossel.',
    type: [CarrosselDto],
  })
  findAll() {
    return this.carrosselService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter imagem por id.' })
  @ApiResponse({
    status: 200,
    description: 'Imagem encontrada.',
    type: CarrosselDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Imagem não encontrada.',
  })
  findOne(@Param('id') id: string) {
    return this.carrosselService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Alterar imagem.' })
  @ApiResponse({
    status: 204,
    description: 'Imagem atualizada.',
  })
  @ApiResponse({
    status: 404,
    description: 'Imagem não encontrada.',
  })
  update(
    @Param('id') id: string,
    @Body() updateCarrosselDto: CarrosselDto,
  ) {
    return this.carrosselService.update(+id, updateCarrosselDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar imagem.' })
  @ApiResponse({
    status: 204,
    description: 'Imagem deletada.',
  })
  @ApiResponse({
    status: 404,
    description: 'Imagem não encontrada.',
  })
  remove(@Param('id') id: string) {
    return this.carrosselService.remove(+id);
  }
}
